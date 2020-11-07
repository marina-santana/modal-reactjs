import React, { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { Container, Form } from './form-react-hooks-form-styles';
import imgUpload from '../../assets/upload.png';

type FormData = {
    image?: string
    name: string;
    description: string;
};

const FormReactHooksForm: React.FC = () => {
  const defaultValue: FormData = { image: 'teste',name: "Bill", description: "Luo" };
  const initialImagePreview = {imagePreview: imgUpload};

  const [imagePreview, setImagePreview] = useState([initialImagePreview]);

  const handleChangeImagePreview = async (event: any, index :number) => {
    const list: any = [...imagePreview];
    const reader = new FileReader();
    const file =  event.target.files[0];

    if (file) reader.readAsDataURL(file);

    const result = await new Promise((resolve) => {
      reader.onload = function() {
        resolve(reader.result);
      }
    })   

    list[index].imagePreview = result;
    setImagePreview(list); 
    
  };

  const handleDeleteImagePreview = async (index :number) => {
    const list: any = [...imagePreview];
    list.splice(index,1);

    setImagePreview(list); 
  };

  const twoCalls = () => {
    append(defaultValue)
    setImagePreview([...imagePreview, initialImagePreview]);
  }

  const twoCallsDelete = (index: number) => {
    handleDeleteImagePreview(index)
    remove(index)
  }
  

  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      form: [defaultValue]
    }
  });

  const { fields, remove, append } = useFieldArray<FormData>({
    control,
    name: "form"
  });

  const onSubmit = (data: FormData) => {
    console.log("data", data);
  };
  
  return (
    <Container>
       <button
          type="button"
          onClick={twoCalls}>
          Clique para adicionar um formulário
        </button>

        <div className="container-forms">
          {fields.map((item, index) => (
            <Form key={index} onSubmit={handleSubmit(onSubmit)}>
              <span role="button" onClick={() => twoCallsDelete(index)}></span>
              <div>
                <img  src={imagePreview[index].imagePreview} alt="image"/>
                <input type="file" name="image" ref={register}
                 onChange={e => handleChangeImagePreview(e, index)} />
              </div>
              <label>Nome</label>
              <input type="text" name={`form[${index}].name`} placeholder="Digite o nome" ref={register}/>
              <label>Descrição</label>
              <textarea name={`form[${index}].description`} ref={register}></textarea>
          </Form>
          ))}
        </div>
  </Container>
  );
}

export default FormReactHooksForm;