import styled from 'styled-components';

export default styled.div`
  animation: appear-text-trans 2s;

  @keyframes appear-text-trans {
    0%    { 
      opacity: 0;
    };
    100%  { 
      opacity: 1;
    };
  }
`