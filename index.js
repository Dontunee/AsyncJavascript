console.log('before');
getUser(1, (user) => {
    console.log('User', user);
    const {gitHubUserName} = user;

    getRepositories(gitHubUserName,(repositories) =>{
        console.log('Repositories',repositories);
    })
    //Get the repositories
});
console.log('after');

function getUser(id, callBack){
    setTimeout(() => {
        console.log('reading a user fom a database');

        callBack( {id: id, gitHubUserName: 'Mosh'});}, 2000);

    }

    function getRepositories(username,callBack){

        setTimeout(() => {
            callBack({repositories: ['repo 1','repo2']});
        },2000);

    }