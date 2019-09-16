import React from 'react'

const EditBook = (props) => {
    const {edit}=props
    return (
        <div>
          {edit.map((v,k)=>
                <div key={k}>
                    <input value={v.book_title}/>
                    <input value={v.book_type}/>
                    <input value={v.author_name}/>
                </div>
            )}
        </div>
    )
}
export default EditBook