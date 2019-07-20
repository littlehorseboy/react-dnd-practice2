import React, { ReactNode } from 'react';
import { useDrop } from 'react-dnd';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { DragItemI } from '../Card/Card';

const useStyles = makeStyles({
  root: {
    border: '1px solid red',
  },
  cardWallWrapper: {

  },
  cardWallContent: {

  },
});

interface Props {
  status: string;
  children: ReactNode;
  updateCardStatus: (cardId: number, targetStatus: string) => void;
}

export default function CardWall(props: Props): JSX.Element {
  const classes = useStyles();

  const [{ isOver }, drop] = useDrop({
    accept: 'card',
    drop: (item: DragItemI): void | undefined => {
      props.updateCardStatus(item.id, props.status);
    },
    collect: (monitor): { isOver: boolean } => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <Grid ref={drop} item xs={6} sm={3} className={classes.root}>
      <p>{props.status}</p>
      <div className={classes.cardWallContent}>
        {props.children}
      </div>
    </Grid>
  );
}
