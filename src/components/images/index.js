import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
    border-radius: 16px;
    opacity: 80%;
    margin-bottom: 16px;
    max-width: 100%;
    display: block;
`;

const ImagesGroup = [
    {
        id: 1,
        name: "life",
        image:"../../assets/images/health-care.png",
    },
    {
        id: 2,
        name: "ball",
        image:"../../assets/images/ball.png",
    },
    {
        id: 3,
        name: "idea",
        image:"../../assets/images/idea.png",
    },
    {
        id: 4,
        name: "tshirt",
        image:"../../assets/images/tshirt.png",
    },
    {
        id: 5,
        name: "country",
        image:"../../assets/images/country.png",
    },

]

function Images() {
    return(
        <div>
            {ImagesGroup.map(img =>(
                 <StyledImage key={img.id} src={img.image} image={img.name} />
            ))}
        </div>
    )
}

export default Images;