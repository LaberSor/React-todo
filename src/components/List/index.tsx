import React from "react";
import classNames from 'classnames';

import './List.scss';

interface listProps {
    items: itemsFromList[],
    isRemovable: boolean,
    
}

interface itemsFromList{
    color?: string,
    icon?: string,
    name: string,
    isActive?: boolean,
    className?: any
} 

const List: React.FunctionComponent<listProps> = ({ items, isRemovable }) => {
    return (
        <ul className="list">
            {
                items.map((item: itemsFromList, index: number) => (
                    
                    <li key={index} className={classNames(item.className, {'active': item.isActive})}>
                        <i>{item.icon ? (
                            <img src={item.icon} alt="Icon" />
                            ) : (
                            <i className={`badge badge--${item.color}`}></i>)
                        }</i>
                        <span>{item.name}</span>
                    </li>
                    
                ))
            }

        </ul>
    );
}

export default List;