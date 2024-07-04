import Nav from "../components/nav/Nav"
import HeaderCollection from "../components/headercollection/HeaderCollection"
import Tags from "../components/tags/Tags"
import Search from "../components/search/Search"
import ContentImages from "../components/contentimages/ContentImages"
import BtnDiscoverMore from "../components/btndiscovermore/BtnDiscoverMore"
import Footer from "../components/footer/Footer"

export function MyCollection(){
    return <>
        <Nav />
        <HeaderCollection />
        <Tags />
        <Search placeholder='Search by description'/>
        <ContentImages />
        <BtnDiscoverMore />
        <Footer />
    </>
}