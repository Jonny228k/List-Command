import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import chalk from 'chalk'

const filepath = path.join("./data", "tasks.json")

if (!existsSync(filepath)){
        writeFileSync(filepath, JSON.stringify([]))

    }
 
    const data = readFileSync(filepath,{encoding: 'utf-8'})
    const parsed = JSON.parse(data) 
    const tasks = new Map( parsed.map(task => [task.name, task]) )

    export const taskManager = {
        task,
        save (){
            const data = JSON.stringify(Array.from(tasks.value()))
            writeFileSync (filepath, JSON.stringify(data, null, 2))
            
        }

        }
    





