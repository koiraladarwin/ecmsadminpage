import AddCategoryCard from "../components/AddCategoryCard"
import CategoryHeader from "../components/CategoryHeader"

const CategoryPage = () => {
  return (
    <div className="px-15">
      <CategoryHeader title="Event Categories" showForm={false}/>
      <AddCategoryCard/>
    </div>
  )
}

export default CategoryPage
