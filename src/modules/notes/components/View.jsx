import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { NoteContext } from '../context/note-context';
import { Table, TableHead, TableContainer, 
  TableRow, TableCell, Paper, TableBody } from '@mui/material';
import { useEffect } from 'react';
import { getNotes } from '../../../shared/services/api-client';
const View = () => {

  // const getDataFromAPI = async ()=>{
  //     const notes = await getNotes();
  //     console.log('All Notes are ', notes);
  // }
  // // Mounting
  // useEffect(()=>{
  //   console.log('Mount Phase....');
  //   getDataFromAPI();
  // },[]);

  // // Updation
  // useEffect(()=>{
  //   console.log('Update Phase Code');
  // });

  // // UnMounting
  // useEffect(()=>{
  //   return function(){
  //     console.log('Un Mount Code...');
  //   }
  // },[]);

  const searchParams = useSearchParams();
  console.log('Search Params ');
  let val = '';
  for(let [key, value] of searchParams[0].entries()){
    console.log('Val is ', value);
    val = value;
  }
  return (
    <div>
      <NoteContext.Consumer>
        {(value)=>{
            
            return (
              <>
            <h1>Total Notes are {value.notes.length}</h1>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                <TableCell>Note Id</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Desc</TableCell>
                <TableCell>Date</TableCell>
                </TableRow>
                </TableHead>
               <TableBody>
                  {value.notes.map((note, index)=><TableRow key={index}>
                    <TableCell>{index+1}</TableCell>
                    <TableCell>{note.title}</TableCell>
                    <TableCell>{note.desc}</TableCell>
                    <TableCell>{note.date}</TableCell>
                  </TableRow>)}
               </TableBody>
                </Table>
                </TableContainer> 
                </>
            );
        }}
      
      </NoteContext.Consumer>
    </div>
  )
}

export default View