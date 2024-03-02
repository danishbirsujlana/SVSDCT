import React from 'react'
import visionPic from "../assets/vision.png"

function HomeAbt() {
    return (
        <div className='bg-white'>
            <h1 className='text-center text-orange-600 text-3xl font-bold mt-12 mb-5'>Our Vision</h1>
            <div>
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-12 lg:px-36">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque minima nesciunt ullam, temporibus vero placeat esse fugit suscipit ducimus nihil possimus assumenda facere iusto cupiditate adipisci in, deserunt, voluptates sequi?
                        Impedit, est ullam. Eos nisi, consequatur recusandae perferendis voluptatem repellat rem, necessitatibus delectus libero quaerat ea saepe hic temporibus, atque praesentium tempore id. Neque omnis minima consequatur itaque aspernatur fugiat?
                        Sapiente suscipit neque, est atque et fugiat voluptate, modi eaque quaerat illum earum! Obcaecati ex, dolores minima iure ea quaerat aperiam molestias iusto animi dolore similique in unde? Consectetur, fuga!
                        voluptatem et libero nemo alias temporibus deleniti in amet facilis un
                    </p>
                    <img src={visionPic} className='w-64 rounded-md my-4 lg:my-0 lg:ms-16' alt="..." />
                </div>
            </div>
        </div>
    )
}

export default HomeAbt;