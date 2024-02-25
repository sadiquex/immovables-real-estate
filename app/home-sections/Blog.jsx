"use client";

import { styled } from "styled-components";
import { H2, SectionTitle } from "../_ui/designSystem/textSystem";
import { AgentsContent } from "./Agents";
import { IoMdTime } from "react-icons/io";
import data from "../../data";

const { blogs } = data;

export default function Blog() {
  return (
    <AgentsContent>
      <SectionTitle>Our Blog</SectionTitle>
      <BlogCardsContainer>
        {blogs.map((blog, i) => (
          <BlogCard key={i} $bgImage={blog.image}>
            <BlogContent>
              <BlogCategory>{blog.category}</BlogCategory>
              <BlogDetails>
                <BlogTitle>{blog.title}</BlogTitle>
                <div>
                  <Author>
                    <span>by </span>
                    {blog.author}
                  </Author>
                  <Date>
                    <IoMdTime style={{ color: "white" }} /> {blog.date}
                  </Date>
                </div>
              </BlogDetails>
            </BlogContent>
          </BlogCard>
        ))}
      </BlogCardsContainer>
    </AgentsContent>
  );
}

const BlogCardsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const BlogCard = styled.div`
  position: relative;
  padding: 20px;
  background-image: url(${(props) => props.$bgImage});
  height: 300px;
  z-index: 0;
  color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  &::before {
    /* backdrop */
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    transition: all 0.3s ease;

    @media (max-width: 480px) {
      background: rgba(0, 0, 0, 0.4);
    }
  }

  &:hover::before {
    background: rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 480px) {
    /* width: 70%; */
  }
`;

const BlogContent = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
`;

const BlogTitle = styled(H2)`
  font-weight: 400;
  font-size: 2.4rem;
  color: #f5f5f5;

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const BlogCategory = styled.div`
  padding: 8px 20px;
  background: ${(theme) => theme.theme.secondary};
`;

const BlogDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  p {
    display: inline;
  }

  span {
    color: white;
  }
`;

const Author = styled.p`
  color: orange;
`;

const Date = styled.p`
  color: orange;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
`;
