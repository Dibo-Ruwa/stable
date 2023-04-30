import styled from "styled-components"

export const Container = styled.section`
          
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding:10% 5% 4%;

     .order{
        color: #2F6634;
        font-size: 20px;
        font-weight: bold;
        margin-top: 20px;
     }

     @media screen and (max-width: 900px) {
        flex-direction: column;
        padding:20vh 5% 4%;
        gap: 30px;
     }

`
export const Text = styled.div`
      width: 50%;

      
      h1 {
          font-size: 64px;
          line-height: 100%;
          margin-bottom: 20px;
          font-weight: 700;
          letter-spacing: 2px;
      }

      p {
          font-size: 20px;
          color: var(--sub-text);
          line-height: 120%;

          span{
            font-size: 25px;
            .order-now{
                cursor: pointer
              }
          }
      }

      @media screen and (max-width: 900px) {
        width: 100%;
        text-align: center;
     
              
      h1 {
          font-size: 36px;
          letter-spacing: 0;
      }

      p {
          font-size: 16px;
          letter-spacing: 0;
         
      }
     }
     

`
export const BtnGrp = styled.div`
          margin-top: 20px;
display: flex;
align-items: center;
gap:30px;

@media screen and (max-width: 900px) {
    flex-direction: column;
    button {
        width: 100%;
    }
}
`