import React from 'react'
import { getFromPublic } from '../../shared/functions/public'
import '../../styles/pages/home/News.scss'

export default function News() {
    return (
        <div className="news">
            <div className="container">
                <img src={getFromPublic("/images/icons/attention.svg")} alt="" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione placeat, tenetur quos quibusdam in quisquam libero maxime accusantium, at consequuntur repellat accusamus repellendus. Optio voluptate, ex accusamus doloribus maiores illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsum quibusdam temporibus perspiciatis esse ex quod recusandae ullam nisi nostrum voluptates suscipit veritatis, exercitationem tempore ducimus excepturi deleniti, omnis necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis esse sed expedita eveniet magni doloremque delectus fuga molestias porro pariatur nesciunt recusandae modi, exercitationem reprehenderit maiores soluta a dolorum repellendus?</p>
            </div>
        </div>
    )
}
