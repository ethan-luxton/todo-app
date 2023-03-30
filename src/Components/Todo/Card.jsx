import { Card, Text, Badge, Group } from '@mantine/core';
import { FaRegTimesCircle } from 'react-icons/fa'
import React, {useState} from 'react';
import Auth from '../Login/Auth.jsx';
import LoginContext from '../Login/Context.jsx'
export function TaskCard({id, deleteItem, itemAssignee, itemComplete, toggleComplete, itemText, itemDifficulty}) {
  const [complete, setComplete] = useState(itemComplete === 'true');
  

  const handleClick = () => {
    
    toggleComplete(id);
    setComplete(!complete);
  };

  return (
    <LoginContext>
      <Auth>
      <Card withBorder padding="md" radius="md">
      <Group position="apart">
      <Auth capability="update"><Badge onClick={handleClick} className={`badge ${complete ? 'badge-complete' : 'badge-pending'}`}>{complete ? 'Complete' : 'Pending'}</Badge></Auth>
        <Text fz="lg" fw={500}>{itemAssignee}</Text>
        <Auth capability="delete"><p className="delete" onClick={() => deleteItem(id)}><FaRegTimesCircle /></p></Auth>
      </Group>

      <Text fz="lg" fw={500} mt={5}>
        {itemText}
      </Text>

      <Group position="apart" mt="md">
        <p>&nbsp;</p>
        <p><small>Difficulty: {itemDifficulty}</small></p>
      </Group>
    </Card>
      </Auth>
      
  </LoginContext>
    
  );
}