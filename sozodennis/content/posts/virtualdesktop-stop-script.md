---
title: "Respondus LockDown Browser Does Not Like Virtual Desktop"
date: 2021-02-08T00:00:00Z
draft: false
tags: ["Respondus", "Virtual Desktop", "Automation", "Tips"]
categories: ["Tech"]
description: "How to automate closing Virtual Desktop services when using Respondus LockDown Browser."
---

## Respondus LockDown Browser Does Not Like Virtual Desktop  

**Date:** 02/08/2021  

If you're in college in 2020-2021, you probably had to use Respondus LockDown for one of your online classes. Usually, Respondus does a good job of notifying you when it doesn't like a program, then **closes it for you.**  

Not for Virtual Desktop, though. It will notify you, but simply leave it running, making **you close it yourself.**  

![Respondus LockDown Virtual Desktop Service Notification](/blog/virtualdesktop-stop-script/respondus-virtualdesktop-screenshot.jpg)

*Extremely annoying when you have to finish a quiz in... 3 minutes 🤡*  

---

## Solution? Use a BAT Script  

Manually, you had to search for `VirtualDesktop.Streamer.exe` and `VirtualDesktop.Service.exe` via Task Manager, then close them. Since we **love automation**, I made a BAT script to automate closing Virtual Desktop!

### Steps to Create the Script

1. Open **Notepad**.  
2. Paste the following commands into Notepad:  

   ```bat
   taskkill /F /IM VirtualDesktop.Streamer.exe
   taskkill /F /IM VirtualDesktop.Service.exe

3. Go to File > Save As.
4. Save the script as StopVirtualDesktopScript.bat.

    Ensure that you Save as type: All Files.

5. Go to where you saved it, then run it as administrator!
