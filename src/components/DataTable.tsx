import Button from './Button'
import Modal from './Modal'
import React, { useState } from 'react'
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
  { field: 'id', headerName: "ID", width: 90, hide: true },
  { field: 'book_title', headerName: 'Book Title', flex: 1 },
  { field: 'author_name', headerName: 'Author Name', flex: 1},
  { field: 'book_length', headerName: 'Book Length', flex: 1 },
  { field: 'type_of_cover', headerName: 'Type of Cover', flex: 2}
]

function DataTable() {
  const [ open, setOpen ] = useState(false);
  const { bookData, getData } = useGetData();
  const [ selectionModel, setSelectionModel ] = useState<string[]>([])
  
  
  // TODO: write useGetData hook 
  
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const deleteData = () => {
    server_calls.delete(selectionModel[0]);
    getData();
    console.log(`Selection model: ${selectionModel}`)
    setTimeout( () => { window.location.reload() }, 500)
  }

    return (
    <>
        <Modal
          id={selectionModel}
          open={open}
          onClose={handleClose}
        /> 
        <div className='flex flex-row'>
            <div>
                <button
                    className='p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white'
                    onClick={() => handleOpen()}
                >
                    Create New Book Entry
                </button>
            </div>
            <Button onClick={handleOpen} className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white" >Update</Button>
            <Button onClick={deleteData} className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white" >Delete</Button>
        </div>
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
          style={{ height: 400, width: "100%"}}
          >
            <h2 className="p-3bg-slate-300 my-2 rounded">My Library</h2>
            <DataGrid rows={bookData} columns={columns} rowsPerPageOptions={[5]}
            checkboxSelection={true}
            onSelectionModelChange={ (item:any) => {
              setSelectionModel(item)
            }}  
            />
        </div>
    </>
  )
}

export default DataTable