import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

export default function Root(): JSX.Element {
  return (
    <>
      <CssBaseline />
      <DndProvider backend={HTML5Backend}>
        <div>init</div>
      </DndProvider>
    </>
  );
}
