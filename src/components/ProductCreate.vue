<template>
  <div class="product_wrap">            
      <div class="product_container">          
          <div class="product_info">
              <input type="text" placeholder="상품 정보 등록" v-model="blogTitle">              
          </div>

          <div class="editor">
              <vue-editor :editorOptions="editorSettings" useCustomImageHandler />
          </div>
          
      </div>
  </div>
</template>

<script>
import Quill from "quill";
window.Quill=Quill;
export default {
    name:"ProductCreate",
}
</script>

<style lang="scss" scoped>
.product_wrap{    
    
    .product_container{        
        width: 1020px;
        height: 100%;
        margin: 0 auto;
        overflow: hidden;
        padding: 40px 0 40px 0;
    }

    
    
    .product_info{
        display: flex;
        margin-bottom:32px;

        input:nth-child(1){
            min-width: 300px;
        }

        input{
            transition: 0.5s ease-in-out all;
            padding:10px 4px;
            border:none;
            border-bottom:1px solid #dddddd;

            &:focus{
                outline:none;
                box-shadow:0 1px 0 0 #303030;
            }
        }
    }

    .editor{
        height:60vh;
        display:flex;
        flex-direction: column;

        .quillWrapper{
            position: relative;
            display: flex;
            flex-direction: column;
            height:100%;
        }

        .ql-container{
            display: flex;
            flex-direction: column;
            height:100%;
            overflow: scroll;
        }

        .ql-editor{
            padding:20px 16px 30px;
        }
    }

    .product_actions{
        margin-top:32px;
        button{
            margin-right: 16px;
        }
    }
}

</style>