import React from 'react'
import ReactSearchBox from 'react-search-box'

const SearchBox = () => {
    const data = [
        {
            key: 'john',
            value: 'John Doe',
        },
        {
            key: 'jane',
            value: 'Jane Doe',
        },
        {
            key: 'mary',
            value: 'Mary Phillips',
        },
        {
            key: 'robert',
            value: 'Robert',
        },
        {
            key: 'karius',
            value: 'Karius',
        },
    ]

    return (
        <div className='container-fluid p-4'>
            <div className='row'>
<div className='col-12 col-md-6 col-lg-4 '>
      <div style={{width:'100%',position:'absolute',padding:0,margin:0}}>
                    <ReactSearchBox
                        placeholder="Search . . ."
                        value="Doe"
                        data={data}
                        inputBoxHeight='50px'
                        inputBoxFontColor='gray'
                        inputBoxFontSize='14pt'
                        dropDownHoverColor='orange'
                        onSelect={() => alert('Ha Ha')}
                        autoFocus={true}
                    />
                    
                </div>
                <div style={{ fontSize: '16pt', color: 'silver', position: 'absolute', marginTop: '5px',marginLeft:'90%',cursor:'pointer' }} onClick={()=>alert('Hey')}>
                    <i className="fa fa-search" ></i>

                </div>  
  </div>
            </div>
  
    
                
                </div>


    )

}
export default SearchBox;