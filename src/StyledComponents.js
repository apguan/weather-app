import styled from 'styled-components'

export const SearchContainer = styled.div`
  display: flex;
  width: 25%;
  margin: 0 auto;
`

export const Input = styled.input`
	font-size:18px;
	padding:10px 10px 10px 5px;
	width:250px;
	border:none;
	border-bottom:1px solid #757575;
	text-align: center;
`

export const Enter = styled.button`
  margin-left: 10px;
  position: relative;
  border-radius: 2px;
  width: 150px;
  outline: none;
  border-width: 0;
  color: #ecf0f1;
  box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
  background-color: #1976d2;
  transition: background-color .3s;

  &:hover {
    cursor: pointer;
    background-color: rgb(17, 82, 147);
  }
`

export let Container = styled.div`
  display: inline-flex;
  margin: 5vh 0;
`

export let Card = styled.div`
  position: relative;
  width: 15vw;
  height: 300px;
  background-color: #fff;
	border-radius: 4px;
	margin: 8px;
	min-width: 150px;
	overflow: hidden;
  color: rgba(0,0,0,.87);
	box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
	-moz-box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
  -webkit-box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);

  &:hover {
    cursor: pointer;
  }
`

export let CardDetail = styled.div`
  position: absolute;
  text-align: justify;
  width: 40%;
  margin: 0 30%;
  bottom: 0;
  line-height: 0.75em;
`

export let CardContent = styled.div`
  width:100%;
  text-align: center;
  margin: 5vh auto;
`

export let ModalDetails = styled.div`
  display: block;
  line-height: .75em;
`

export let ErrorMessage = styled.div`
  margin-top: 10px;
  color: red;
  -webkit-animation: fadein 2s;
  -moz-animation: fadein 2s;
  -ms-animation: fadein 2s;
  -o-animation: fadein 2s;
  animation: fadein 2s;

  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }

  /* Internet Explorer */
  @-ms-keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }

  /* Opera < 12.1 */
  @-o-keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }
`