import styled from "styled-components"

export const Container = styled.div`
        width: 40%;
        position: relative;
        @media screen and (max-width: 900px) {
        width: 100%;
     }
        @media screen and (min-width: 1600px) {
        width: 30%;
     }
        
        &::before {
          content: "";
          width: 96%;
          
          background: var(--primary);
          height:88%;
          bottom: 10px;
          left: 2%;
          position: absolute;
          display: block;
          z-index: -1;
          border-radius: 45% 45% 0 0;
          }
        &::after {
          content: "";
          width: 100%;
          height:90.5%;
          bottom: 10px;
          left: 0;  
          border: 1px solid;
          border-bottom: none;
          position: absolute;
          display: block;
          z-index: -1;
          border-radius: 45% 45% 0 0;
          }
        img {
          width: 100%;
        }

        .svg {
          width: 50px;
          position: absolute;

          &.star {
            top: 27%;
          }

          &.scribble {
            width: 100px;
            top: 30%;
            right: -5%;
          }

          &.scribbleC {
            width: 80px;
            bottom: 8%;
            left: -4%;
          }
        }
          
`