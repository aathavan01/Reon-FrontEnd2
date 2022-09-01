import React from 'react'
import Footer from '../components/Footer'
import UserHeader from '../components/UserHeader'
import { Link } from 'react-router-dom'


const Index = () => {
  return (
    <>
    <UserHeader/>

    <div className="paddingTop overflow-auto px-5 homePad">

        <div className='row'>
            <div className='col-lg-5 px-4 text-center h-50 w-40'>
                <div className='card px-3 grey'>
                <h4>Description</h4>
                    <div className='px-5'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, minima in architecto, placeat iste cum reprehenderit esse facilis commodi iure quibusdam obcaecati voluptatum nobis totam nisi impedit. Tempore, architecto est.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. hello everyone. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolor natus commodi eius, repellendus autem consequatur corrupti facilis, accusantium repudiandae error quod, odio pariatur minus. Sit nobis recusandae unde illum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, totam corporis asperiores perferendis veniam fugiat nesciunt quasi optio ipsum in mollitia! Possimus itaque exercitationem. lore
                    <div className='my-1'>
                    </div>
                    </div>
                </div>  
                <Link to="Vehicles" class="btn btn-warning">Hire Now<i class="bi bi-arrow-right"></i></Link>

            </div>
            
            <div className='col-lg-7 card h-50 w-60'>
                <img src= {require('../../assets/img/Transperth_Volgren_CR228L_bodied_Volvo_B7RLE.jpg')} alt='Vehicle image1' />
            </div>
            
        </div>

            <div className='px-xl-5' >
            <div className="card mb-4 ">
            <div className="row g-0">
            <div className="col-md-4">
            <img src={require("../../assets/img/banner-alliance_partner_640x500.jpg")} className="img-fluid rounded-start" alt="Vehicle page profile"/>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title text-center">Join with Us and Add your vehicles</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor placeat, reprehenderit, aut dolorum cupiditate accusantium ut minima quasi laborum distinctio praesentium. Adipisci, ullam ipsum minima obcaecati voluptates quas! Eius, qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quos libero nobis nostrum optio ducimus sit dolore fugit, sed modi tempore repellendus eius ipsum illo perferendis quae quis eos architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatem quisquam nesciunt nobis maiores, earum corrupti suscipit illo nam sunt magni fuga recusandae vero ipsam quo corporis alias voluptate quasi?ww</p>
                <br/>
                <br/>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor placeat, reprehenderit, aut dolorum cupiditate accusantium ut minima quasi laborum distinctio praesentium. Adipisci, ullam ipsum minima obcaecati voluptates quas! Eius, qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quos libero nobis nostrum optio ducimus sit dolore fugit, sed modi tempore repellendus eius ipsum illo perferendis quae quis eos architecto.</p>
                </div>
            </div>
            </div>
        </div>
    </div>
</div>        
<Footer/>

</>
    
  )
}

export default Index