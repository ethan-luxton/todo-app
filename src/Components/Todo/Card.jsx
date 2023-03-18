import { Card, Text, Badge, Group } from '@mantine/core';
import { FaRegTimesCircle } from 'react-icons/fa'
import React, {useState} from 'react';

export function TaskCard({id, deleteItem, itemAssignee, itemComplete, toggleComplete, itemText, itemDifficulty}) {
  const [complete, setComplete] = useState(itemComplete ? 'Pending' : 'Complete');

  const handleClick = () => {
    toggleComplete(id);
    setComplete(prevState => prevState === 'Complete' ? 'Pending' : 'Complete');
  };

  return (
    <Card withBorder padding="md" radius="md">
      <Group position="apart">
        <Badge onClick={handleClick} className={`badge ${complete === 'Complete' ? 'badge-complete' : 'badge-pending'}`}>{complete}</Badge> 
        <Text fz="lg" fw={500}>{itemAssignee}</Text>
        <p className="delete" onClick={() => deleteItem(id)}><FaRegTimesCircle /></p>
      </Group>

      <Text fz="lg" fw={500} mt={5}>
        {itemText}
      </Text>

      <Group position="apart" mt="md">
        <p>&nbsp;</p>
        <p><small>Difficulty: {itemDifficulty}</small></p>
      </Group>
    </Card>
  );
}