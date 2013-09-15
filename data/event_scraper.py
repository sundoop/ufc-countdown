# script to get scrape event data from the ufc event page. 
# makes actual request to website, so it'll be a little slow

#imports
from bs4 import BeautifulSoup
import requests
import json

# globals
EVENT_URL = "http://www.ufc.com/schedule/event"
EVENT_CONTENT_DIV_ID = "event_content"


# method that makes the call to the events page, and returns the soup object
def getPageData(make_web_request=1):
    
    r = requests.get(EVENT_URL)
    data = r.text

    soup = BeautifulSoup(data,"lxml")
    return soup


# method that returns the actual data formatted 
def extractEventData(soup):
    event_divs = soup.findAll("div",attrs={"style":"border:1px solid #ccc;padding:0;margin-bottom:9px;"})
    events = [getEvent(e) for e in event_divs]

    return events

#method that 
def getEvent(event_div):
    date,time =  date,time = getDateAndTimeFromEventDiv(event_div)
    return dict(title = getTitleFromEventDiv(event_div), tagline=getTaglineFromEventDiv(event_div),
    img_url = getImageUrlFromEventDiv(event_div),
    location = getLocationFromEventDiv(event_div),date=date,time=time)

    #return Event(title,img_url,date,time,location)

def getLocationFromEventDiv(event_div):
    loc = event_div.find("h3", attrs={"id":"event-location"})
    return loc.contents[0]

def getDateAndTimeFromEventDiv(event_div):
    date = event_div.find("div", attrs={"class":"date"}).contents[0].strip()
    time = event_div.find("div", attrs={"class":"time"}).contents[0].strip()

    return date,time

def getTitleFromEventDiv(event_div):
    title_div = event_div.find("div",attrs={"class":"event-title"})
    title_a = title_div.find("a")
    return title_a.contents[0]

def getImageUrlFromEventDiv(event_div):
    img = event_div.find("img")
    return img["src"]

def getTaglineFromEventDiv(event_div):
    tagline_div = event_div.find("div", attrs={"class":"event-tagline"})
    tagline_a = tagline_div.find("a")
    return tagline_a.contents[0].strip()

def main():
    
    # get soup from website
    soup = getPageData()

    # get list of event objects
    event_data = dict(events=extractEventData(soup))


    
    print json.dumps(event_data)


if __name__ == "__main__":
    main()


