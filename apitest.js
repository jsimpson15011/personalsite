const token = 'v1Wi2tCy2ZyFkZqM4yrlS5DpHtN43JTwAZhRx1NL'

/*fetch('https://bibles.org/v2/search.js?query=Mahershalalhashbaz',
		{
			headers: {
				'Access-Control-Allow-Origin':'*',
				'Access-Control-Allow-Credentials':'true',
				'Access-Control-Allow-Methods':'GET',
				'Access-Control-Allow-Headers':'Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control'
			},
			credentials: 'include',
			redirecet: 'follow',
			method: 'GET',
			mode: 'cors'
		}
	)
  	.then(myJson => {
  		console.log(myJson);
  	});*/

fetch('https://randomuser.me/api/',
		{
			headers: {
				'Access-Control-Allow-Origin':'*',
				'Access-Control-Allow-Credentials':'true',
				'Access-Control-Allow-Methods':'GET',
				'Access-Control-Allow-Headers':'Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control'
			},
			credentials: 'include',
			redirecet: 'follow',
			method: 'GET',
			mode: 'no-cors'
		}
	)
  	.then(myJson => {
  		console.log(myJson);
  	});

//Twitter: 	yJKOetv6a0K3NrtqKLbmJBjC3

//v1Wi2tCy2ZyFkZqM4yrlS5DpHtN43JTwAZhRx1NL



/*fetch('https://randomuser.me/api/',
		{
			headers: {
			'Authorization':'token ${token}'
		},
		credentials: 'include',
		mode: 'no-cors'
		}
	)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });*/