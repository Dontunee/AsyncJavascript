console.log('before');

//Using promises to get resolved promise object
//  getUser(1)
//     .then(user =>getRepositories(user.gitHubUserName))
//     .then(repos => getcommits(repos))
//     .then(commits => displayCommits(commits))
//     .catch(error => console.log(error.message));
//getRepositories(user).then(repos => displayRepositoriesAndGetCommits(repos));
//getcommits(repos).then(commits => displayCommits(commits));
displayAll();

console.log('after');

function getUser(id){

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('reading a user fom a database');
    
            resolve( {id: id, gitHubUserName: 'Mosh'});}, 2000);
    });
}
    

    function getRepositories(username){
        return new Promise((resolve,reject) =>{
            setTimeout(() => {
                console.log('calling github');
                resolve({repositories: ['repo 1','repo2']});
            },2000);
        })
    }

    function getcommits(repositories){

        return new Promise((resolve,reject) => {
            setTimeout(() => {
                console.log('calling github');
               resolve({commits: ['commit1', 'commit2']});
            },2000);
        });
       
    }

    function displayCommits (commits) {
        console.log('commits', commits);
    }

    function displayRepositories(repositories){
        console.log('Repositories',repositories);
      
    }

    function displayUserDetails(user) {
        console.log('User', user);        
    
    }
   
    async function displayAll(){
        try{
            const user = await getUser(1);
            const repos = await getRepositories(user);
            const commits = await getcommits(repos);
            
            displayUserDetails(user);
            displayRepositories(repos);
            displayCommits(commits);
        }
        catch (error) {
            console.log('Error', error.message)
        }
    }
    
