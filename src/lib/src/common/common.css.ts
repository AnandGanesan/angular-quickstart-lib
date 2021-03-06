export const commonCss = `
.icon{
  width:25px;
  text-align: center;
  padding-left: 5px;
  padding-right: 2px;
  border:none;
}

:host{
  border-width: 1px;
  border-style: solid;
  padding-bottom: 1px;
  padding-top: 1px;
  display: inline-block;
}


:host(.input-focus){
  outline: none;
}
:host /deep/ input{
  border: none;
  outline: none;
  height: 100%;
  box-sizing: border-box;
}
`;
