<style>
  input[type="file"]{
    position: absolute;
    top: -500px;
  }
  div.file-listing img{
    max-width: 90%;
  }
</style>

<template>
  <div class="container">
    <div class="large-12 medium-12 small-12 cell">
      <div>
        <pre>
          参考网址：https://run.iviewui.com/HDiaX8k0
          ajax  提交格式  'Content-Type': 'multipart/form-data'
          提交数据格式不是数组 json 而是二进制

          axios.post( '/file-multiple-preview',
                formData,
                {
                  headers: {
                    'Content-Type': 'multipart/form-data'
                  }
                }
              ).then(function(){
                console.log('SUCCESS!!');
              })
              .catch(function(){
                console.log('FAILURE!!');
              });


        </pre>
      </div>
      <label>
        <input type="file" id="files" ref="files" accept="image/*" multiple v-on:change="handleFilesUpload()"/>
      </label>
    </div>
    <div class="large-12 medium-12 small-12 cell">
      <div class="grid-x">
        <div v-for="(file, key) in files" class="large-4 medium-4 small-6 cell file-listing">
          {{ file.name }}
          <img class="preview" v-bind:ref="'image'+parseInt( key )"/>
        </div>
      </div>
    </div>
    <br>
    <div class="large-12 medium-12 small-12 cell clear">
      <button v-on:click="addFiles()">Add Files</button>
    </div>
    <br>
    <div class="large-12 medium-12 small-12 cell">
      <button v-on:click="submitFiles()">Submit</button>
    </div>
  </div>
</template>

<script>
  export default {

    data(){
      return {
        files: []
      }
    },
    methods: {
      addFiles(){
        this.$refs.files.click();
      },
      submitFiles(){
        let formData = new FormData();
        for( var i = 0; i < this.files.length; i++ ){
          let file = this.files[i];

          formData.append('files[' + i + ']', file);
        }
        //ajax  提交格式  'Content-Type': 'multipart/form-data'

        //提交数据格式不是数组 json 而是二进制


        // axios.post( '/file-multiple-preview',
        //   formData,
        //   {
        //     headers: {
        //       'Content-Type': 'multipart/form-data'
        //     }
        //   }
        // ).then(function(){
        //   console.log('SUCCESS!!');
        // })
        //   .catch(function(){
        //     console.log('FAILURE!!');
        //   });
      },
      handleFilesUpload(){
        let uploadedFiles = this.$refs.files.files;
        for( var i = 0; i < uploadedFiles.length; i++ ){
          this.files.push( uploadedFiles[i] );
        }
        this.getImagePreviews();
      },
      getImagePreviews(){
        for( let i = 0; i < this.files.length; i++ ){
          if ( /\.(jpe?g|png|gif)$/i.test( this.files[i].name ) ) {
            let reader = new FileReader();
            reader.addEventListener("load", function(){
              this.$refs['image'+parseInt( i )][0].src = reader.result;
            }.bind(this), false);
            reader.readAsDataURL( this.files[i] );
          }
        }
      }
    }
  }
</script>
