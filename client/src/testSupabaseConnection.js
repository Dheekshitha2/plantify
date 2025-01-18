import supabase from './supabaseClient';  // Adjust the path as necessary based on your project structure

const testSupabaseConnection = async () => {
    const { data, error } = await supabase
        .from('test_table')
        .select('*');

    if (error) {
        console.error('Supabase connection error:', error);
    } else {
        console.log('Data retrieved from Supabase:', data);
        if (data.length === 0) {
            console.log('No data found in the table.');
        }
    }
};

export default testSupabaseConnection;
