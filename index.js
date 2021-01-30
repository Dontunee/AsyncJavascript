console.log('before');
getUser(1,getAllUserDetails);
console.log('after');

function getUser(id, callBack){
    setTimeout(() => {
        console.log('reading a user fom a database');

        callBack( {id: id, gitHubUserName: 'Mosh'});}, 2000);

    }

    function getRepositories(username,callBack){

        setTimeout(() => {
            console.log('calling github');
            callBack({repositories: ['repo 1','repo2']});
        },2000);

    }

    function getcommits(repositories,callBack){
        setTimeout(() => {
            console.log('calling github');
            callBack({commits: ['commit1', 'commit2']});
        },2000);
    }

    function displayCommits (commits) {
        console.log('commits', commits);
    }

    function displayRepositoriesAndGetCommits(repositories){
        console.log('Repositories',repositories);
      
        getcommits(repositories,displayCommits);

    }

    function getAllUserDetails(user) {
        console.log('User', user);
    
        getRepositories(user.gitHubUserName,displayRepositoriesAndGetCommits);
        
    
    }
   
