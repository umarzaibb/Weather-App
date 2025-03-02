import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){
    let image={
        hot:'https://images.unsplash.com/photo-1447601932606-2b63e2e64331?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwZGF5fGVufDB8fDB8fHww',
        cold:'https://images.unsplash.com/photo-1600074667507-3acb2b08d980?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbGQlMjBkYXl8ZW58MHx8MHx8fDA%3D',
        rain:'https://images.unsplash.com/photo-1501999635878-71cb5379c2d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbiUyMGRheXxlbnwwfHwwfHx8MA%3D%3D'
    }
  

    return (
        <div className='InfoDiv'>
            <Card sx={{ width: 250 }}>
        <CardMedia
          sx={{ height: 170 }}
          image={info.humidity>80?image.rain:info.temp>20?image.hot:image.cold}
          title="green iguana" 
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {info.city}{info.humidity>80?<ThunderstormIcon />:info.temp>25?<WbSunnyIcon/>:<AcUnitIcon/>}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           Temp: {info.temp}&deg;C <br/>
           temp_min: {info.temp_min}&deg;C <br/>
           temp_max: {info.temp_max}&deg;C <br/>
           Humidity: {info.humidity}% <br/>
           Feels like {info.feels_like}&deg;C described as {info.description}
          </Typography>
        </CardContent>
      </Card>
        </div>
    )
}