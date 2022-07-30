import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './Componets/Pages/Home/Home';
import About from './Componets/Pages/About/About';
import Women from './Componets/Pages/Product/Women/Women';
import Error from './Componets/Error/Error';
import Saree from './Componets/Pages/Product/Women/womenCatagory/saree/Saree';
import SingleSaree from './Componets/Pages/Product/Women/womenCatagory/saree/SingleSaree';
import Login from './Componets/Login/Login';
import Register from './Componets/Login/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Orna from './Componets/Pages/Product/Women/womenCatagory/Orna/Orna';
import Contact from './Componets/Pages/Contact/Contact';
import NewIn from './Componets/Pages/NewIn/NewIn';
import SingleNewIn from './Componets/Pages/NewIn/SingleNewIn';
import SingleOrna from './Componets/Pages/Product/Women/womenCatagory/Orna/SingleOrna';
import ShoppingCart from './Componets/Pages/ShoppingCart/ShoppingCart';
import DeshBoard from './Componets/Pages/Account/DeshBoard/DeshBoard';
import Order from './Componets/Pages/Account/Order/Order';
import Admin from './Componets/Pages/Account/Admin/Admin';
import Download from './Componets/Pages/Account/Download/Download';
import Address from './Componets/Pages/Account/Address/Address';
import PrivetRoute from './Componets/Login/PrivetRoute/PrivetRoute';
import AddAdmin from './Componets/Pages/Account/Admin/AddAdmin';
import AdminRoute from './Componets/Login/AdminRoute/AdminRoute';
import EarRing from './Componets/Pages/Product/Jewelry/EarRing';
import SingleEarRing from './Componets/Pages/Product/Jewelry/SingleEarRing';
import ManageOrder from './Componets/Pages/Account/ManageOrder/ManageOrder';
import EarringAdd from './Componets/Pages/Account/ManageOrder/JewellaryAdd/EarringAdd';
import Jewellary from './Componets/Pages/Account/ManageOrder/JewellaryAdd/Jewellary';
import Necklecs from './Componets/Pages/Product/Jewelry/Neclesh/Necklecs';
import SingleNecklecs from './Componets/Pages/Product/Jewelry/Neclesh/SingleNecklecs';
import NecklaceAdd from './Componets/Pages/Account/ManageOrder/JewellaryAdd/NecklaceAdd';
import ManageAllProduct from './Componets/Pages/Account/AdminManage/ManageAllProduct';
import ManageAllOrder from './Componets/Pages/Account/AdminManage/ManageAllOrder';
import JewelleryDel from './Componets/Pages/Account/AdminManage/ManageProductDel/JewelleryDel/JewelleryDel';
import EarRingDel from './Componets/Pages/Account/AdminManage/ManageProductDel/JewelleryDel/EarRingDel';
import Kurti from './Componets/Pages/Product/Women/womenCatagory/Kurti/Kurti';
import SingleKurti from './Componets/Pages/Product/Women/womenCatagory/Kurti/SingleKurti';
import WomenProductAdd from './Componets/Pages/Account/ManageOrder/WomenAddProduct/WomenProductAdd';
import KurtiProductsAdd from './Componets/Pages/Account/ManageOrder/WomenAddProduct/KurtiProductsAdd';
import SareeProductAdd from './Componets/Pages/Account/ManageOrder/WomenAddProduct/SareeProductAdd';
import Man from './Componets/Pages/Product/Man/Man';
import Panjabi from './Componets/Pages/Product/Man/catagori/Panjabi';
import NacklacesDel from './Componets/Pages/Account/AdminManage/ManageProductDel/JewelleryDel/NacklacesDel';
import WomenDel from './Componets/Pages/Account/AdminManage/ManageProductDel/WomenDel/WomenDel';
import KurtiDel from './Componets/Pages/Account/AdminManage/ManageProductDel/WomenDel/KurtiDel';
import MendelProduct from './Componets/Pages/Account/AdminManage/ManageProductDel/Men/MendelProduct';
import HomePageManage from './Componets/Pages/Account/ManageOrder/HomePageManage.js/HomePageManage';
import BestSellsAdd from './Componets/Pages/Account/ManageOrder/HomePageManage.js/BestSellsAdd';
import SingleBestSells from './Componets/Pages/carousel/SingleBestSells';
import Coker from './Componets/Pages/Product/Jewelry/Coker/Coker';
import SingleCokar from './Componets/Pages/Product/Jewelry/Coker/SingleCokar';
import BannerAdd from './Componets/Pages/Account/ManageOrder/HomePageManage.js/BannerAdd';
import HomePageMDel from './Componets/Pages/Account/AdminManage/HomePageManageDel/HomePageMDel';
import Bannerdel from './Componets/Pages/Account/AdminManage/HomePageManageDel/Bannerdel/Bannerdel';
import BestSellPDel from './Componets/Pages/Account/AdminManage/HomePageManageDel/BestSellPDel/BestSellPDel';
import Blouse from './Componets/Pages/Product/Women/womenCatagory/Blouse/Blouse';
import SingleBlouse from './Componets/Pages/Product/Women/womenCatagory/Blouse/SingleBlouse';
import SareeDel from './Componets/Pages/Account/AdminManage/ManageProductDel/WomenDel/SareeDel';
import NewInAdd from './Componets/Pages/Account/ManageOrder/HomePageManage.js/NewInAdd';
import JewellaryT from './Componets/Pages/Product/Jewelry/JewellaryT';
import SalawrKameez from './Componets/Pages/Product/Women/womenCatagory/SalawrKameez/SalawrKameez';
import SingleSalawr from './Componets/Pages/Product/Women/womenCatagory/SalawrKameez/SingleSalawr';
import SalawrKameezAdd from './Componets/Pages/Account/ManageOrder/WomenAddProduct/SalawrKameezAdd';
import BlouseAdd from './Componets/Pages/Account/ManageOrder/WomenAddProduct/BlouseAdd';
import CokersAdd from './Componets/Pages/Account/ManageOrder/JewellaryAdd/CokersAdd';
import SuperPackage from './Componets/Pages/Product/SurprisePackage/SuperPackage';
import SinglePackageSu from './Componets/Pages/Product/SurprisePackage/SinglePackageSu';
import SurprisePackageAdd from './Componets/Pages/Account/ManageOrder/SurprisePackage/SurprisePackageAdd';
import OrnaAdd from './Componets/Pages/Account/ManageOrder/WomenAddProduct/OrnaAdd';
import Shirt from './Componets/Pages/Product/Man/catagori/Shirt';
import TShirt from './Componets/Pages/Product/Man/TShirt';
import PackageDel from './Componets/Pages/Account/AdminManage/PackageDel';
import SKameezDel from './Componets/Pages/Account/AdminManage/ManageProductDel/WomenDel/SKameezDel';
import BlouseDel from './Componets/Pages/Account/AdminManage/ManageProductDel/WomenDel/BlouseDel';
import OrnaDel from './Componets/Pages/Account/AdminManage/ManageProductDel/WomenDel/OrnaDel';
import Cokerdel from './Componets/Pages/Account/AdminManage/ManageProductDel/JewelleryDel/Cokerdel';
import NewProductDel from './Componets/Pages/Account/AdminManage/HomePageManageDel/NewProductDel';
import PhotoGallary from './Componets/Pages/PhotoGallary/PhotoGallary';
import PhotoGalleryAdd from './Componets/Pages/Account/ManageOrder/HomePageManage.js/PhotoGalleryAdd';
import Other from './Componets/Pages/Product/Jewelry/Coker/Other/Other';
import SingleOthers from './Componets/Pages/Product/Jewelry/Coker/Other/SingleOthers';
import OtherAdd from './Componets/Pages/Account/ManageOrder/JewellaryAdd/OtherAdd';
import OthersDel from './Componets/Pages/Account/AdminManage/ManageProductDel/JewelleryDel/OthersDel';


function App() {
  return (
    <div className="">

      <AuthProvider>

        <BrowserRouter>
          <Routes>

            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>

            {/* login/reg */}
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>

            <Route path='/shoppingcart' element={<ShoppingCart></ShoppingCart>}></Route>




            <Route path='/bestsells/:serviceId' element={<SingleBestSells />}></Route>


            {/* products */}




            {/* man */}
            <Route path='/men' element={<Man />}></Route>


            <Route path='/gallery' element={<PhotoGallary />}></Route>

            

            <Route path='/men/panjabi' element={<Panjabi />}></Route>
            <Route path='/men/shirt' element={<Shirt />}></Route>
            <Route path='/men/tshirt' element={<TShirt />}></Route>

            {/* women */}

            <Route path='/women' element={<Women></Women>}></Route>
            {/* kurti */}
            <Route path='/women/kurti' element={<Kurti></Kurti>}></Route>
            <Route path='/women/kurti/:serviceId' element={<SingleKurti></SingleKurti>}></Route>

            {/*  */}
            <Route path='/women/salawerkameez' element={<SalawrKameez />}></Route>
            <Route path='/women/salawerkameez/:serviceId' element={<SingleSalawr />}></Route>

            {/* saree */}
            <Route path='/women/saree' element={<Saree></Saree>}></Route>
            <Route path='/women/saree/:serviceId' element={<SingleSaree></SingleSaree>}></Route>


            <Route path='/women/blouse' element={<Blouse />}></Route>
            <Route path='/women/blouse/:serviceId' element={<SingleBlouse />}></Route>

            {/* orna */}
            <Route path='/women/orna' element={<Orna></Orna>}></Route>
            <Route path='/women/orna/:serviceId' element={<SingleOrna></SingleOrna>}></Route>

            {/* jewellary */}
            {/* earring */}
            <Route path='/jewellary' element={<JewellaryT />}></Route>

            <Route path='/jewellary/earring' element={<EarRing></EarRing>}></Route>
            <Route path='/jewellary/earring/:serviceId' element={<SingleEarRing></SingleEarRing>}></Route>

            {/* coker */}
            <Route path='/jewellary/coker' element={<Coker />}></Route>
            <Route path='/jewellary/coker/:serviceId' element={<SingleCokar />}></Route>

            {/* others */}
            <Route path='/jewellary/others' element={<Other />}></Route>
            <Route path='/jewellary/others/:serviceId' element={<SingleOthers />}></Route>


            {/* package */}
            <Route path='/package' element={<SuperPackage />}></Route>
            <Route path='/package/:serviceId' element={<SinglePackageSu />}></Route>

            {/* nacklace */}
            <Route path='/jewellary/necklace' element={<Necklecs></Necklecs>}></Route>
            <Route path='/jewellary/necklace/:serviceId' element={<SingleNecklecs></SingleNecklecs>}></Route>

            <Route path='/newin' element={<NewIn></NewIn>}></Route>
            <Route path='/newin/:serviceId' element={<SingleNewIn></SingleNewIn>}></Route>

            {/* deshboard privet route */}

            <Route path='/myaccount' element={<PrivetRoute><DeshBoard /></PrivetRoute>}></Route>
            <Route path='/myaccount/order' element={<PrivetRoute><Order /></PrivetRoute>}></Route>
            <Route path='/myaccount/download' element={<PrivetRoute><Download /></PrivetRoute>}></Route>
            <Route path='/myaccount/address' element={<PrivetRoute><Address /></PrivetRoute>}></Route>

            {/* admin panal */}
            <Route path='/myaccount/admin' element={<PrivetRoute><AdminRoute><Admin /></AdminRoute></PrivetRoute>}></Route>
            <Route path='/myaccount/admin/makeadmin' element={<PrivetRoute><AdminRoute><AddAdmin /></AdminRoute></PrivetRoute>}></Route>


            {/* manageProduct (del) */}
            <Route path='/myaccount/admin/manageproduct' element={<PrivetRoute><AdminRoute><ManageAllProduct /></AdminRoute></PrivetRoute>}></Route>
            <Route path='/myaccount/admin/manageproduct/jewellerydel' element={<PrivetRoute><AdminRoute><JewelleryDel /></AdminRoute></PrivetRoute>}></Route>
            <Route path='/myaccount/admin/manageproduct/jewellerydel/earringdel' element={<PrivetRoute><AdminRoute><EarRingDel /></AdminRoute></PrivetRoute>}></Route>
            <Route path='/myaccount/admin/manageproduct/jewellerydel/nacklacedel' element={<PrivetRoute><AdminRoute><NacklacesDel /></AdminRoute></PrivetRoute>}></Route>
            <Route path='/myaccount/admin/manageproduct/jewellerydel/cokerdel' element={<PrivetRoute><AdminRoute><Cokerdel /></AdminRoute></PrivetRoute>}></Route>
            <Route path='/myaccount/admin/manageproduct/jewellerydel/otherdel' element={<PrivetRoute><AdminRoute><OthersDel /></AdminRoute></PrivetRoute>}></Route>


            <Route path='/myaccount/admin/managevieworder' element={<PrivetRoute><AdminRoute><ManageAllOrder /></AdminRoute></PrivetRoute>}></Route>

            {/* manageProduct (WOMEN) */}
            <Route path='/myaccount/admin/manageproduct/womendel' element={<PrivetRoute><AdminRoute><WomenDel /></AdminRoute></PrivetRoute>}></Route>
            <Route path='/myaccount/admin/manageproduct/womendel/kurtidel' element={<PrivetRoute><AdminRoute><KurtiDel /></AdminRoute></PrivetRoute>}></Route>
            <Route path='/myaccount/admin/manageproduct/womendel/sareedel' element={<PrivetRoute><AdminRoute><SareeDel /></AdminRoute></PrivetRoute>}></Route>
            <Route path='/myaccount/admin/manageproduct/womendel/ornadel' element={<PrivetRoute><AdminRoute><OrnaDel /></AdminRoute></PrivetRoute>}></Route>
            <Route path='/myaccount/admin/manageproduct/womendel/blousedel' element={<PrivetRoute><AdminRoute><BlouseDel /></AdminRoute></PrivetRoute>}></Route>
            <Route path='/myaccount/admin/manageproduct/womendel/kameezdel' element={<PrivetRoute><AdminRoute><SKameezDel /></AdminRoute></PrivetRoute>}></Route>


            <Route path='/myaccount/admin/manageproduct/mendel' element={<PrivetRoute><AdminRoute><MendelProduct /></AdminRoute></PrivetRoute>}></Route>
            <Route path='/myaccount/admin/manageproduct/homepmdel' element={<PrivetRoute><AdminRoute><HomePageMDel /></AdminRoute></PrivetRoute>}></Route>
            <Route path='/myaccount/admin/manageproduct/homepmdel/bannerdel' element={<PrivetRoute><AdminRoute><Bannerdel /></AdminRoute></PrivetRoute>}></Route>
            <Route path='/myaccount/admin/manageproduct/homepmdel/newindel' element={<PrivetRoute><AdminRoute><NewProductDel /></AdminRoute></PrivetRoute>}></Route>
            <Route path='/myaccount/admin/manageproduct/homepmdel/bestspdel' element={<PrivetRoute><AdminRoute><BestSellPDel /></AdminRoute></PrivetRoute>}></Route>
            <Route path='/myaccount/admin/manageproduct/packagedel' element={<PrivetRoute><AdminRoute><PackageDel /></AdminRoute></PrivetRoute>}></Route>

            {/* add product */}

            {/* jewellery */}

            <Route path='/myaccount/admin/manageorder' element={<PrivetRoute><AdminRoute><ManageOrder /></AdminRoute></PrivetRoute>}></Route>
            <Route path='/myaccount/admin/manageorder/jewellery' element={<PrivetRoute><AdminRoute><Jewellary></Jewellary></AdminRoute></PrivetRoute>}></Route>
            <Route path='/myaccount/admin/manageorder/jewellery/earring' element={<PrivetRoute><AdminRoute><EarringAdd /></AdminRoute></PrivetRoute>}></Route>
            <Route path='/myaccount/admin/manageorder/jewellery/necklace' element={<PrivetRoute><AdminRoute><NecklaceAdd /></AdminRoute></PrivetRoute>}></Route>
            <Route path='/myaccount/admin/manageorder/jewellery/cokeradd' element={<PrivetRoute><AdminRoute><CokersAdd /></AdminRoute></PrivetRoute>}></Route>
            <Route path='/myaccount/admin/manageorder/jewellery/othersadd' element={<PrivetRoute><AdminRoute><OtherAdd /></AdminRoute></PrivetRoute>}></Route>

            {/* women */}
            <Route path='/myaccount/admin/manageorder/womenadd' element={<PrivetRoute><AdminRoute><WomenProductAdd></WomenProductAdd></AdminRoute></PrivetRoute>}></Route>
            <Route path='/myaccount/admin/manageorder/womenadd/kurtiadd' element={<PrivetRoute><AdminRoute><KurtiProductsAdd /></AdminRoute></PrivetRoute>}></Route>

            <Route path='/myaccount/admin/manageorder/womenadd/sareeadd' element={<PrivetRoute><AdminRoute><SareeProductAdd /></AdminRoute></PrivetRoute>}></Route>
            <Route path='/myaccount/admin/manageorder/womenadd/salaweradd' element={<PrivetRoute><AdminRoute><SalawrKameezAdd /></AdminRoute></PrivetRoute>}></Route>
            <Route path='/myaccount/admin/manageorder/womenadd/blouseadd' element={<PrivetRoute><AdminRoute><BlouseAdd /></AdminRoute></PrivetRoute>}></Route>
            <Route path='/myaccount/admin/manageorder/womenadd/ornaadd' element={<PrivetRoute><AdminRoute><OrnaAdd /></AdminRoute></PrivetRoute>}></Route>


            <Route path='/myaccount/admin/manageorder/homepage' element={<PrivetRoute><AdminRoute><HomePageManage /></AdminRoute></PrivetRoute>}></Route>
            <Route path='/myaccount/admin/manageorder/homepage/bestsellsadd' element={<PrivetRoute><AdminRoute><BestSellsAdd /></AdminRoute></PrivetRoute>}></Route>
            <Route path='/myaccount/admin/manageorder/homepage/banneradd' element={<PrivetRoute><AdminRoute><BannerAdd /></AdminRoute></PrivetRoute>}></Route>
            <Route path='/myaccount/admin/manageorder/homepage/newproductadd' element={<PrivetRoute><AdminRoute><NewInAdd /></AdminRoute></PrivetRoute>}></Route>
            <Route path='/myaccount/admin/manageorder/homepage/photoadd' element={<PrivetRoute><AdminRoute><PhotoGalleryAdd /></AdminRoute></PrivetRoute>}></Route>
            <Route path='/myaccount/admin/manageorder/packageadd' element={<PrivetRoute><AdminRoute><SurprisePackageAdd /></AdminRoute></PrivetRoute>}></Route>

            <Route path='*' element={<Error></Error>}></Route>

          </Routes>
        </BrowserRouter>

      </AuthProvider>

    </div>
  );
}

export default App;
