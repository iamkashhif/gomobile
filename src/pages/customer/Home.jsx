
import Grid from '../../components/Customers/Grid'
import Carousel from '../../components/Customers/Carousel'
import Brands from '../../components/Customers/Brands'
import SearchTires from '../../components/Customers/SearchTires'
import Review from '../../components/Customers/Review'
const Home = () => {
  return (
    <div className=" ">
    <div className="bg-[#F8F8F8] mx-10 md:h-[60vh] h-72 rounded-lg "></div>
    <SearchTires />
    <Grid />
    <Carousel />
    <Brands />
    <Review />
  </div>
  )
}

export default Home