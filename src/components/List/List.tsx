import classNames from 'classnames';

import { ListItemProps, ListProps } from './interfaces';

const ListItem = ({ children, className }: ListItemProps) => {
  const classes = classNames('list__item', className);

  return <li className={classes}>{children}</li>;
};

export const List = ({ children, className }: ListProps) => {
  const classes = classNames('list', className);

  return <ul className={classes}>{children}</ul>;
};

List.Item = ListItem;
