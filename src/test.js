// test.js
import { supabase } from './supabaseClient.js'  // note the .js on Node

async function testSupabase() {
  const { data, error } = await supabase
    .from('People')
    .select('*')

  if (error) {
    console.error('Error:', error)
  } else {
    console.log('Data:', data)
  }
}

testSupabase()