import React from "react";
import Item from "../Item/Item";
import "./ItemList.scss";
import men from './../../assets/men.jpg'
import pilcha from './../../assets/333.png'
import yordan from './../../assets/wwwww.jpg'
import woman from './../../assets/der.jpg'

class ItemList extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://blog.thelonghairs.us/wp-content/uploads/2015/08/hairandhats-33.jpg',
          id: 1
        },
        {
          title: 'jackets',
          imageUrl: pilcha,
          id: 2
        },
        {
          title: 'sneakers',
          imageUrl: yordan,
          id: 3
        },
        {
          title: 'womens',
          imageUrl: woman,
          size: 'large',
          id: 4
        },
        {
          title: 'mens',
          imageUrl: men,
          size: 'large',
          id: 5
        },

        
        
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <Item key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}
export default ItemList;
