There are several items that I'm trying to accomplish with this repository.

Development environment:<br>
Mac OS X Sierra 10.12.5
Safari 10.1.1<br>
Safari Technology Preview Release 33 (Safari 11.0, WebKit 12604.1.25.0.2)<br>
Node 6.11.0 (NPM 3.10.10) and Node 8.1.2 (NPM 5.0.3)<br>


First off, I am trying to get these basic tests working with Safari, and I've been having problems with getting two items working.

- First, I can't get the 'browser.refresh()' to work from within beforeEach.  Every time I run the test, the test will timeout trying to do the 'browser.refresh()'.  You can reference this question I asked on StackOverflow.com:  https://stackoverflow.com/questions/44703293/cannot-perform-a-browser-refresh-in-beforeeach-using-selenium-3-4-0-and-safari  
- Second, the next problem I have is that when I perform a 'sendKeys' to a select/option dropdown box, each time I send the sendKeys, the browser stops.  I need to literally click on the dropdown to select the option I want to get the test to proceed on.

As I get answers to my problems as I proceed on, I will update this document with my solutions and list what I have found out.  I also will be using this to add any new problems as I continue to learn how to get my Selenium tests to work with Safari.

