import React, { useState } from 'react';
import { Container, Form } from './form-dynami-styles';
import imgUpload from '../../assets/upload.png';
import {v1 as id} from "uuid"; 

type FormData = {
    id: string;
    image: string;
    name: string;
    description: string;
    imagePreview: string;
};

const FormDynamic: React.FC = () => {
  
  const defaultValue: FormData = {id: id(), image: '',name: '', description: '', imagePreview: imgUpload };

  const [fields, setFields] = useState<Array<FormData>>([]);

  const handleChangeImagePreview = async (event: any, index :number) => {
    const array: any = [...fields];

    const reader = new FileReader();
    const file =  event.target.files[0];

    if (file) reader.readAsDataURL(file);

    const result = await new Promise((resolve) => {
      reader.onload = function() {
        resolve(reader.result);
      }
    })       

    array[index].imagePreview = result;
    
    setFields([...array]);
    
  };

  const append = () => {
    const array: Array<FormData> = [...fields, defaultValue];
    setFields(array);
  };

  const remove = (index: number) => {
    setFields([...fields.slice(0, index), ...fields.slice(index + 1)]);
  };
  
  return (
    <Container>
       <button
          type="button"
          onClick={append}>
          Clique para adicionar um formulário
        </button>

        <div className="container-forms">
        {fields.map((item: FormData, index: number) => (
            <Form key={item.id}>
              <span role="button" onClick={() => remove(index)}></span>
              <div>
                <img  src={item.imagePreview} alt="image"/>
                <input type="file" name="image" 
                 onChange={e => handleChangeImagePreview(e, index)} />
              </div>
              <label>Nome</label>
              <input type="text" name={`form[${index}].name`} placeholder="Digite o nome" />
              <label>Descrição</label>
              <textarea name={`form[${index}].description`} ></textarea>
          </Form>
          ))}
        </div>
  </Container>
  );
}

export default FormDynamic;