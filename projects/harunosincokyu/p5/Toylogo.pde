Logo logo1, logo2;
Timer timer;


void setup()
{
	size(960, 115);
	smooth();
	frameRate(30);
	logo1 = new Logo( "p5/logo1.png", false );
	logo2 = new Logo( "p5/logo2.png", true );
	timer = new Timer(1000);
}


void draw()
{
	background(255, 0);
	logo1.update();
	logo2.update();

	if (timer.isFinished()) {
    	logo1.setMove( false );
  	}
}


void P5pulsed()
{
  timer = new Timer(1000);
  timer.start();
  logo1.setMove( true );
}



class Logo
{
	float mx, my;
	PImage img;
	float angle = 0.0;
	float speed = 0.1;
	float range = 6.0;
	float defaultX = 0;
	float defaultY = 0;	
	Boolean move;

	Logo( String _filename, Boolean _move )
	{
		img = loadImage( _filename );
		move = _move;
		mx = 0;
		my = 0;
		
	}
 
 	void update()
 	{	
 		if (move)
 		{
	 		mx = defaultX + pulses() * range; 		
	 		my = defaultY + pulses() * range;
	  		angle += speed;
	 		image(img, mx, my);
	 	} else {
	 		image(img, 0, 0);
	 	}

 	}

	float pulses()
	{
		float t = millis();
		if ( int(random(2))==0 )
		{
			return sin(t-PI*tan(t)*0.01);
		} else {
			return (sin(t-PI*tan(t)*0.01)) * -1;
		}
	}

	void setMove( Boolean _move )
	{
		move = _move;
	}
}


/* by Daniel Shiffman */
class Timer {
 
  int savedTime;
  int totalTime;
  
  Timer(int tempTotalTime) {
    totalTime = tempTotalTime;
  }
  
  void start() {
    savedTime = millis(); 
  }
  
  boolean isFinished() { 
    int passedTime = millis()- savedTime;
    if (passedTime > totalTime) {
      return true;
    } else {
      return false;
    }
  }
}