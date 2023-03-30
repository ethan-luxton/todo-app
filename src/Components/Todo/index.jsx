import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form';
import { SliderBar } from './Slider.jsx'
import { TaskCard } from './Card.jsx'
import { Grid, Container, Button, Pagination} from '@mantine/core';
import { v4 as uuid } from 'uuid';
import "./Todo.scss"
import { useContext } from 'react';
import { SettingsContext } from '../settingsContext';
import Auth from '../Login/Auth.jsx';
import LoginContext from '../Login/Context.jsx'
import axios from 'axios';

const Todo = () => {
    
    const fetchData = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API}/api/v1/todo`);
            
            setList(response.data.results);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    

    const { settings } = useContext(SettingsContext);
    const [defaultValues] = useState({
        difficulty: 1,
    });
    const [list, setList] = useState([]);
    const [incomplete, setIncomplete] = useState([]);
    const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

    async function addItem(item) {
        item.id = uuid();
        item.complete = false;
   
        try {
            const response = await axios.post(`${process.env.REACT_APP_API}/api/v1/todo`, item);
            setList([...list, response.data]);
        } catch (error) {
            console.error('Error adding item:', error);
        }
    }

    async function deleteItem(id) {
        try {
            await axios.delete(`${process.env.REACT_APP_API}/api/v1/todo/${id}`);
            
            fetchData()
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    }

    async function toggleComplete(id) {
        console.log(id)
        const itemToUpdate = list.find(item => item.id === id);
        if (!itemToUpdate) return;
    
        const updatedItem = { ...itemToUpdate, complete: !itemToUpdate.complete };
    
        try {
            await axios.put(`${process.env.REACT_APP_API}/api/v1/todo/${id}`, updatedItem);
            const items = list.map(item => item.id === id ? updatedItem : item);
            setList(items);
        } catch (error) {
            console.error('Error updating item:', error);
        } 

    }
    
    useEffect(() => {
        let incompleteCount = list.filter(item => !item.complete).length;
        setIncomplete(incompleteCount);
        document.title = `To Do List: ${incomplete}`;
        fetchData();
        // linter will want 'incomplete' added to dependency array unnecessarily. 
        // disable code used to avoid linter warning 
        // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [list]);  
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = settings.itemsPerPage;

    const pageCount = Math.ceil(list.length / itemsPerPage);
    const displayedItems = settings.showCompleted
    ? list.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : list
        .filter((item) => !item.complete)
        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    function sortByDifficulty(a, b) {
        return a.difficulty - b.difficulty;
      }
    
    displayedItems.sort(sortByDifficulty);
    
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    return (
        <LoginContext>
        <Container my="md">
            <Grid >
                
            <Auth capability="create"><Grid.Col xs={10} className="compheader">{
                    <header data-testid="todo-header">
                        <h1 data-testid="todo-h1">To Do List: {incomplete} items pending</h1>
                    </header>
                }</Grid.Col>
                <Grid.Col className="formSpace" xs={4}>
                    <form onSubmit={handleSubmit} className="form">

                        <h2>Add To Do Item</h2>

                        <label>
                        <span>To Do Item</span>
                        <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
                        </label>

                        <label>
                        <span>Assigned To</span>
                        <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
                        </label>

                        <label>
                        <span>Difficulty</span>
                            <SliderBar className='slider' handleChange={handleChange} defaultValues={defaultValues.difficulty}/>
                        </label>

                        <label>
                        <Button type="submit">Add Item</Button>
                        </label>
                    </form>
                </Grid.Col></Auth>
                <Grid.Col xs={6}>
                    {displayedItems.map(item => (
                        <TaskCard 
                            deleteItem={deleteItem} 
                            key={item._id} 
                            id={item._id} 
                            itemComplete={item.complete.toString()} 
                            itemAssignee={item.assignee} 
                            itemDifficulty={item.difficulty}
                            toggleComplete={toggleComplete} 
                            itemText={item.text}
                            className='Tasks'
                        />  
                         
                    ))
                    }
                </Grid.Col> 
            </Grid>   
        </Container>
        <div className='pagination-wrapper'>
            <Pagination
                total={pageCount}
                current={currentPage}
                onChange={handlePageChange}
                siblings={1}
                size="md"
            />
        </div>
        </LoginContext>
    );
};

export default Todo;