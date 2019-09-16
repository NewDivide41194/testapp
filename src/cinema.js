import React from 'react'
import './Metronome.css'

export default class Ticket extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
items:[
    {Customer_Name:"",Seat_No:"",Screen_Time:"",Price:""}
]
        }
    }
    render() {
        return (
            <div>
                <h4>Cinema</h4>
                <div className="row">
                    <div className="col-lg-3 col-md-3">
                        <form className="form-group">
                            <h2>Ticket Booking</h2>
                            <label>Customer Name</label>
                            <input type="text" className="form-control" />
                            <label>Seat no.</label>
                            <input type="text" className="form-control" />
                            <label>Screen Time</label>
                            <select className="form-control">
                                <option>9:30 AM</option>
                                <option>12:30 PM</option>
                                <option>3:30 PM</option>
                                <option>6:30 PM</option>
                                <option>9:30 PM</option>
                            </select>
                            <label>Price</label>
                            <input type="text" className="form-control" />
                        </form>
                    </div>
                    <div className="col-lg-9 col-md-9" style={{ backgroundColor: "yellow" }}>
                    <div>Screen</div>

                        <div className="container-fluid d-flex " >
                            <div class="seat-1" />
                            <div class="seat-1" />
                            <div class="seat-1" />
                            <div class="seat-1" />
                            <div class="seat-1" />
                        </div>

                        <div className="container-fluid d-flex " >
                            <div class="seat-1" />
                            <div class="seat-1" />
                            <div class="seat-1" />
                            <div class="seat-1" />
                            <div class="seat-1" />
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}