// Settings.js
import React, { useContext } from 'react';
import { SettingsContext } from '../settingsContext';
import { Button, Checkbox, Col, Paper, Grid, NumberInput, Container } from '@mantine/core';

const Settings = () => {
    const { settings, updateSettings } = useContext(SettingsContext);
  
    const handleItemsPerPageChange = (value) => {
      updateSettings({ ...settings, itemsPerPage: value });
    };
  
    const handleShowCompletedChange = () => {
      updateSettings({ ...settings, showCompleted: !settings.showCompleted });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
    };
  
   
  
    return (
        <Container my="md">
        <Grid>
            <Grid.Col xs={10} className="compheader">
                    <header data-testid="todo-header">
                        <h1 data-testid="todo-h1">Manage Settings</h1>
                    </header>
            </Grid.Col>
          <Col xs={4} className="formSpace">
            <form onSubmit={handleSubmit}>
              <h2>Update Settings</h2>
    
              <Paper padding="md" shadow="xs" style={{ marginBottom: '1rem' }}>
                <label>
                  <span>Items per page</span>
                  <NumberInput
                    value={settings.itemsPerPage}
                    onChange={handleItemsPerPageChange}
                    min={1}
                    max={20}
                    style={{ marginTop: '0.5rem', width: '100%' }}
                  />
                </label>
              </Paper>
    
              <Paper padding="md" shadow="xs" style={{ marginBottom: '1rem' }}>
                <label>
                  <span>Show completed items</span>
                  <Checkbox
                    checked={settings.showCompleted}
                    onChange={handleShowCompletedChange}
                    style={{ marginTop: '0.5rem' }}
                  />
                </label>
              </Paper>
    
              <Button type="submit">Save Settings</Button>
            </form>
          </Col>
          <Col xs={6}>
            <div>
              <h3>Current Settings</h3>
              <p>Items per page: {settings.itemsPerPage}</p>
              <p>Show completed items: {settings.showCompleted ? 'Yes' : 'No'}</p>
            </div>
          </Col>
        </Grid>
        </Container>
      );
  };
  
  export default Settings;