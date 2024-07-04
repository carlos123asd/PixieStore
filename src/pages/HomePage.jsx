import Nav from '../components/nav/Nav'
import Banner from '../components/banner/Banner'
import Search from '../components/search/Search'
import SelectFilter from '../components/select/SelectFilter'
import ContentImages from '../components/contentimages/ContentImages'
import Footer from '../components/footer/Footer'

export function HomePage(){
    return <>
        <Nav />
        <Banner />
        <Search />
        <SelectFilter />
        <ContentImages />
        <Footer />
    </>
}