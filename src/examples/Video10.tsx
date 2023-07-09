import { useState } from "react";
import './Video10.css'

interface IUser {
    name: string;
    age: number | string;
    city: string
}

interface Iprops {
    defaultName: string;
    defaultAge: number | string;
}

const Video10 = (props: Iprops) => {
    const {defaultName, defaultAge} = props

    const [name, setName] = useState<string>(defaultName);
    const [age, setAge] = useState<number | string>(defaultAge);
    const [city, setCity] = useState<string[]>(["Hà Nội", "Bắc Ninh", "Hồ Chí Minh"]);

    // const [users, setUsers] = useState([
    //     { name: "Eric", age: 25, city: "Hà Nội" },
    //     { name: "Eric1", age: 26, city: "Đà Nẵng" },
    //     { name: "Eric2", age: 27, city: "Hồ Chí Minh" },
    // ])
    const [users, setUsers] = useState<IUser[]>([])


    const [isShowBtn, setIsShowBtn] = useState(false);
    const [selectedCity, setSelectedCity] = useState<string>("Bắc Ninh"); //nhiều khi user bỏ qua phần này nên ta set mặc định chọn là HN

    const handleOnChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        const user = {
            name: name,
            age: age,
            city: selectedCity,
        }
        console.log(">>>user: ", user);
        
        setUsers([...users, user]) //spread syntax
        setName("")
        setAge("")
    }

    return (
        <>
            <div>Example video 10:  hello world </div>
            <div className="form-user">
                <div>
                    <label >Name:</label><br />
                    <input type="text" value={name} onChange={handleOnChangeName}/><br />
                </div>
                <div>
                    <label >Age:</label><br />
                    <input type="text" value={age} onChange={(e) => setAge(e.target.value)}/><br />
                </div>
                <div>
                    <label >City:</label><br />
                    <select onChange={(e) => setSelectedCity(e.target.value)}>
                        {city.map((item) => {
                           return (
                                <option key={item}>{item}</option>
                            )
                        })
                        }
                    </select>
                </div>

                <input type="submit" value="Submit" onClick={handleSubmit}/>
            </div>
            <hr />
            <div>List Users:</div>
            <div className="table-user">
                <table style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            < th>Name</th>
                            <th>Age</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => {
                                return (
                                    <tr key={user.name}>
                                        <td>{user.name}</td>
                                        <td>{user.age}</td>
                                        <td>{user.city}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Video10;