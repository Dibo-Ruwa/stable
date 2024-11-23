'use client'
import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid var(--color2);
  background: var(--color2-20);
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
  max-width: 300px;
  position: relative;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  h3 {
    font-size: 18px;
    margin-bottom: 7px;
  }

  p {
    margin-bottom: 5px;
    span {
      font-weight: bold;
      margin-left: 5px;
    }
  }

  .delBtn {
    position: absolute;
    top: -10px;
    right: -10px;
    width: 20px;
    height: 20px;
    border-radius: 4px;
    outline: none;
    border: none;
    background: rgba(241, 107, 107, 0.351);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;

    &:hover {
      background: #f16b6b;
    }
  }

  .payBtn {
    border-radius: 8px;
    padding: 10px 17px;
    outline: none;
    margin-top: 20px;
    border: none;
    background: var(--color2);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;

    &:hover {
      background: #f16b6b;
    }
  }
`;
