<?php
	/**
	 * GIT DEPLOYMENT SCRIPT
	 *
	 * Used for automatically deploying websites via github or bitbucket, more deets here:
	 *
	 *		https://gist.github.com/1809044
	 */

	// The commands
	$commands = array(
		'echo $PWD',
		'whoami',
		'git pull',
		'git status',
		'git submodule sync',
		'git submodule update',
		'git submodule status',
	);

	// Run the commands for output
	$output = '';
	foreach($commands AS $command){
		// Run it
		$tmp = shell_exec($command);
		// Output
		$output .= "<span style=\"color: #6BE234;\">\$</span> <span style=\"color: #729FCF;\">{$command}\n</span>";
		$output .= htmlentities(trim($tmp)) . "\n";
	}

	// Make it pretty for manual user access (and why not?)
?>
<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title>GIT DEPLOYMENT SCRIPT</title>
</head>
<body style="background-color: #000000; color: #FFFFFF; font-weight: bold; padding: 0 10px;">
<pre>
                                               _ _ _ _ _ _ _ _ _ _ _
                                             /                        \
                                            (     Git Deployment       \
                  %%%%%%%%%%%%%%%%%%%%     (__)      Script            /
                %%%%%%%%%%%%%%%%%%%%%%%    (_)\       v0.1            /
               %%% /     %%%%%%%%%%%%%%%  ()   \ _ _ _ _ _ _ _ _ _ _ /
              %%% /        %%%%%%%%%%%%%%
               %%/           %%%%%%%%%%%%
                / _____        %%%%%%%%%%%
               ( (_____ \     %%%%%%%%%%%%
                ) <<span style="color: #FF0000;">&hearts;</span> _>-'    %%%//_\\%%%%
               /             %%//\_//%%%
              /                )()//%%%
             (___)            (.__/%%%
               %%%%%           : | %%%
               \__\ %          @ /  |
               (__/  %          /   |
                 %%  %%        /    |
                %%%%%%%       /     |
               %%%%%%%------'`
               %%%%%%%
               %%%%%%%
               %%%%%%%
               %%%%%%%
               %%%%%%

<?php echo $output; ?>
<br />
<div style="width: 100%; overflow:hidden;">
<div style="width: 9999px;">
<div style="float:left;">
     /|       |\
  `__\\       //__'
     ||      ||
   \__`\     |'__/
     `_\\   //_'
     _.,:---;,._
     \_:     :_/
       |<span style="color: #FF0000;">&hearts;. .&hearts;</span>|
       |     |
       ,\.-./ \
       ;;`-'   `---__________-----.-.
       ;;;                         \_\
       ';;;                         |
        ;    |                      ;
         \   \     \        |      /
          \_, \    /        \     |\
            |';|  |,,,,,,,,/ \    \ \_
            |  |  |           \   /   |
            \  \  |           |  / \  |
             | || |           | |   | |
             | || |           | |   | |
             | || |           | |   | |
             |_||_|           |_|   |_|
            /_//_/           /_/   /_/ 
</div>
<div style="float:left;">
     /|       |\
  `__\\       //__'
     ||      ||
   \__`\     |'__/
     `_\\   //_'
     _.,:---;,._
     \_:     :_/
       |<span style="color: #FF0000;">&hearts;. .&hearts;</span>|
       |     |
       ,\.-./ \
       ;;`-'   `---__________-----.-.
       ;;;                         \_\
       ';;;                         |
        ;    |                      ;
         \   \     \        |      /
          \_, \    /        \     |\
            |';|  |,,,,,,,,/ \    \ \_
            |  |  |           \   /   |
            \  \  |           |  / \  |
             | || |           | |   | |
             | || |           | |   | |
             | || |           | |   | |
             |_||_|           |_|   |_|
            /_//_/           /_/   /_/ 
</div>
<div style="float:left;">
     /|       |\
  `__\\       //__'
     ||      ||
   \__`\     |'__/
     `_\\   //_'
     _.,:---;,._
     \_:     :_/
       |<span style="color: #FF0000;">&hearts;. .&hearts;</span>|
       |     |
       ,\.-./ \
       ;;`-'   `---__________-----.-.
       ;;;                         \_\
       ';;;                         |
        ;    |                      ;
         \   \     \        |      /
          \_, \    /        \     |\
            |';|  |,,,,,,,,/ \    \ \_
            |  |  |           \   /   |
            \  \  |           |  / \  |
             | || |           | |   | |
             | || |           | |   | |
             | || |           | |   | |
             |_||_|           |_|   |_|
            /_//_/           /_/   /_/ 
</div>
<div style="float:left;">
     /|       |\
  `__\\       //__'
     ||      ||
   \__`\     |'__/
     `_\\   //_'
     _.,:---;,._
     \_:     :_/
       |<span style="color: #FF0000;">&hearts;. .&hearts;</span>|
       |     |
       ,\.-./ \
       ;;`-'   `---__________-----.-.
       ;;;                         \_\
       ';;;                         |
        ;    |                      ;
         \   \     \        |      /
          \_, \    /        \     |\
            |';|  |,,,,,,,,/ \    \ \_
            |  |  |           \   /   |
            \  \  |           |  / \  |
             | || |           | |   | |
             | || |           | |   | |
             | || |           | |   | |
             |_||_|           |_|   |_|
            /_//_/           /_/   /_/ 
</div>
<div style="float:left;">
     /|       |\
  `__\\       //__'
     ||      ||
   \__`\     |'__/
     `_\\   //_'
     _.,:---;,._
     \_:     :_/
       |<span style="color: #FF0000;">&hearts;. .&hearts;</span>|
       |     |
       ,\.-./ \
       ;;`-'   `---__________-----.-.
       ;;;                         \_\
       ';;;                         |
        ;    |                      ;
         \   \     \        |      /
          \_, \    /        \     |\
            |';|  |,,,,,,,,/ \    \ \_
            |  |  |           \   /   |
            \  \  |           |  / \  |
             | || |           | |   | |
             | || |           | |   | |
             | || |           | |   | |
             |_||_|           |_|   |_|
            /_//_/           /_/   /_/ 
</div>
<div style="float:left;">
     /|       |\
  `__\\       //__'
     ||      ||
   \__`\     |'__/
     `_\\   //_'
     _.,:---;,._
     \_:     :_/
       |<span style="color: #FF0000;">&hearts;. .&hearts;</span>|
       |     |
       ,\.-./ \
       ;;`-'   `---__________-----.-.
       ;;;                         \_\
       ';;;                         |
        ;    |                      ;
         \   \     \        |      /
          \_, \    /        \     |\
            |';|  |,,,,,,,,/ \    \ \_
            |  |  |           \   /   |
            \  \  |           |  / \  |
             | || |           | |   | |
             | || |           | |   | |
             | || |           | |   | |
             |_||_|           |_|   |_|
            /_//_/           /_/   /_/ 
</div>
<div style="float:left;">
     /|       |\
  `__\\       //__'
     ||      ||
   \__`\     |'__/
     `_\\   //_'
     _.,:---;,._
     \_:     :_/
       |<span style="color: #FF0000;">&hearts;. .&hearts;</span>|
       |     |
       ,\.-./ \
       ;;`-'   `---__________-----.-.
       ;;;                         \_\
       ';;;                         |
        ;    |                      ;
         \   \     \        |      /
          \_, \    /        \     |\
            |';|  |,,,,,,,,/ \    \ \_
            |  |  |           \   /   |
            \  \  |           |  / \  |
             | || |           | |   | |
             | || |           | |   | |
             | || |           | |   | |
             |_||_|           |_|   |_|
            /_//_/           /_/   /_/ 
</div>
<div style="float:left;">
     /|       |\
  `__\\       //__'
     ||      ||
   \__`\     |'__/
     `_\\   //_'
     _.,:---;,._
     \_:     :_/
       |<span style="color: #FF0000;">&hearts;. .&hearts;</span>|
       |     |
       ,\.-./ \
       ;;`-'   `---__________-----.-.
       ;;;                         \_\
       ';;;                         |
        ;    |                      ;
         \   \     \        |      /
          \_, \    /        \     |\
            |';|  |,,,,,,,,/ \    \ \_
            |  |  |           \   /   |
            \  \  |           |  / \  |
             | || |           | |   | |
             | || |           | |   | |
             | || |           | |   | |
             |_||_|           |_|   |_|
            /_//_/           /_/   /_/ 
</div>
</div>
</div>
</pre>
</body>
</html>