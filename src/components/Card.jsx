

function Card(){
    return(
        <div className="container">
            <div className='card'>
                <div className="image-text-wrapper">
                    <img src='src\assets\Bear_mid_profile_pic.PNG' className="card-img"/>
                    <p className="card-p">Brave Little Blocks: Web3 Developer</p>
                </div>
                <ul className="list-styles">
                        <li>React and Solidity Focused</li>
                        <li>Github: BraveLittleBlocks</li>
                        <li>Twitter: @BraveBlock</li>
                </ul>
            </div>
        </div>
    )
}

export default Card