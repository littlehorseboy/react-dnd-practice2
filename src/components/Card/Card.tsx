import React from 'react';
import { useDrag, DragObjectWithType } from 'react-dnd';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    border: '1px solid blue',
  },
});

interface Props {
  id: number;
  name: string;
}

export interface DragItemI extends DragObjectWithType {
  id: number;
}

export default function Card(props: Props): JSX.Element {
  const classes = useStyles();

  const [{ isDragging }, drag] = useDrag({
    item: { type: 'card', id: props.id },
    collect: (monitor): { isDragging: boolean } => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} className={classes.root}>
      { props.name }
    </div>
  );
}
