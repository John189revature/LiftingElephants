import './category-item.styles.scss'

const CategoryItem = ({ category }) => {
    const { title } = category
    return (
        <div className='category-container'>
            <div className='background-image'> </div>
            <div className='category-body-container'>
                <h2>{title}</h2>
                <p>Select</p>
            </div>
        </div>



    )


}

export default CategoryItem