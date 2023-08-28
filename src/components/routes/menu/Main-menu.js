import CategoryItem from './categoryitem/Category-item.component'
import { categories } from './menu';
  

const Mainmenu = () => {
    return (
      <div>
        <div className="categories-container">
        {categories.map (({id, title, image}) =>(
                <CategoryItem key={id} category={{title, image}} />
        ))}
      </div>
     </div> 
    )
}

export default Mainmenu