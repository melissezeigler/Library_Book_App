import Button from "./Button"
import Input from "./Input"

import { useForm } from "react-hook-form"
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux";
import { chooseBook_title, chooseAuthor_name, chooseBook_length, chooseType_of_cover } from "../redux/slices/RootSlice";

// interfaces

interface BookFormProps {
  id?: string[]
}

const BookForm = (props:BookFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)

    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Update: ${ data } ${ props.id }`)  
      setTimeout( () => {window.location.reload()}, 1000);
      event.target.reset()
    } else {
      // Use dispatch to update our state in our store
      dispatch(chooseBook_title(data.book_title));
      dispatch(chooseAuthor_name(data.author_name));
      dispatch(chooseBook_length(data.book_length));
      dispatch(chooseType_of_cover(data.type_of_cover));

      server_calls.create(store.getState())
      setTimeout( () => {window.location.reload()}, 1000);
    }
  }  

  return (

    //TODO - add Handle function
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label htmlFor="book_title">Book Title</label>
            <Input {...register('book_title')} name='book_title' placeholder="Book Title"/>
        </div>
        <div>
            <label htmlFor="author_name">Author Name</label>
            <Input {...register('author_name')}  name='author_name' placeholder="Author Name"/>
        </div>
        <div>
            <label htmlFor="book_length">Book Length</label>
            <Input {...register('book_length')}  name='book_length' placeholder="Book Length"/>
        </div>
        <div>
            <label htmlFor="type_of_cover">Type of Cover</label>
            <Input {...register('type_of_cover')}  name='type_of_cover' placeholder="Type of Cover"/>
        </div>
        <div className="flex p-1">
          <Button
            className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
            >
              Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default BookForm
