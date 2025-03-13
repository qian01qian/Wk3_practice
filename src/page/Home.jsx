import Banner from '../components/Banner'
import Category from '../components/Category'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Map from '../components/Map'
import '../homepage.css'
function Page() {
    return (
        <>
            <Header/>
            <main>
                <Banner />
                <Category />
                <Map />
            </main>
            <Footer />
        </>
    )
}
export default Page;